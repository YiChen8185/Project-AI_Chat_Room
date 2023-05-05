import React, { useState, useEffect, useRef } from "react";
import styles from "./ChatWindow.module.css";
import Footer from "./Footer";

export const ChatWindow = (props) => {
    const [moreQuestions, setMoreQuestions] = useState({
      explain_more_questions: "",
      in_depth_questions: "",
      in_width_questions: "",
    });

    const sendQuestionToAPI = async (question) => {
      const response = await fetch("https://guangwei.azurewebsites.net/ask_question", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });
      const answer = await response.json();
      console.log(answer);
      return answer["answer"];
    };

    const getMoreQuestionsFromAPI = async () => {
      const response = await fetch("https://guangwei.azurewebsites.net/suggest_new_questions", {
        method: "GET"
      });
      const questions = await response.json();
      console.log(questions);
      // {"explain_more_questions": explain_more_questions, "in_depth_questions": in_depth_questions, "in_width_questions": in_width_questions}
      // set to moreQuestions
      setMoreQuestions(questions);
      return questions;
    };

    const saveHistoryToBackend = async (message) => {
      console.log("saveHistoryToBackend: " + props.team_id)
      props.setMessages([...props.messages, message]);
      const prevMessages = props.messages;
      const updatedMessages = [...prevMessages, message];
      const team_id = props.team_id;
      const response = await fetch("https://guangwei.azurewebsites.net/save-history", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          team_id: team_id,
          history: updatedMessages, 
        }),
      });
      const data = await response.json();
      console.log(data);
    };


    useEffect(() => {
      if (
        props.messages.length > 0 &&
        props.messages[props.messages.length - 1].sender !== "chatgpt"
      ) {
        const fetchAnswerAndUpdateMessages = async () => {
          const question = props.messages[props.messages.length - 1].text;
          const answer = await sendQuestionToAPI(question);
          // const questions = await getMoreQuestionsFromAPI();
          saveHistoryToBackend({ text: answer, sender: "chatgpt" });
          console.log("Check the team id: " + props.team_id);
        };
  
        fetchAnswerAndUpdateMessages();
      }
    }, [props.messages]);
  
    const handleSendMessage = (message) => {
      props.setMessages([...props.messages, message]);
    };

    const chatMessagesContainerRef = useRef(null);

    useEffect(() => {
        if (chatMessagesContainerRef.current) {
        chatMessagesContainerRef.current.scrollTop = chatMessagesContainerRef.current.scrollHeight;
        }
    }, [props.messages]);

    const renderChatGPTMessageButtons = () => {
      return (
          <div className={styles.chatGPTMessageButtons}>
              <button className={styles.chatGPTMessageButton}>
                  {moreQuestions.explain_more_questions}
              </button>
              <button className={styles.chatGPTMessageButton}>
                  {moreQuestions.in_depth_questions}
              </button>
              <button className={styles.chatGPTMessageButton}>
                  {moreQuestions.in_width_questions}
              </button>
          </div>
      );
  };

    return (
        <div className={styles.chatWindow}>
          <div className={styles.chatMessagesContainer} ref={chatMessagesContainerRef}>
            {props.messages.map((message, index) => (
              <div key={index} className={`${styles.messageContainer} ${message.sender === "user" ? styles.userMessage : ""}`}>
                <div className={`${styles.avatar} ${message.sender === "user" ? styles.userAvatar : styles.chatGPTAvatar}`}>{message.sender === "user" ? "G" : "C"}</div>
                <div className={message.sender === "user" ? styles.userMessageBubble : styles.chatGPTMessageBubble}>
                    {message.text}
                    {/* {message.sender !== "user" && renderChatGPTMessageButtons()} */}
                </div>
              </div>
            ))}
          </div>
          <Footer onSendMessage={(text) => handleSendMessage({ text, sender: "user" })} />
        </div>
    );
};

export default ChatWindow;