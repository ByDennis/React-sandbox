import React, { useState, useEffect, memo } from "react";
export const Example = memo(() => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
});

const Commentui = memo(props => {
  const { comment, updateComment } = props;
  console.log("----->", props);
  useEffect(() => {});
  return (
    <div style={{ color: comment.color }}>
      <span>{comment.content}</span>
      {comment.displayButton && (
        <button
          onClick={() => {
            updateComment();
          }}
        >
          Click me
        </button>
      )}
    </div>
  );
});

const commentHook = initialValue => {
  const [comment, setComment] = useState(() => {
    return (
      initialValue || {
        color: "red",
        content: "this is a comment!!!!",
        displayButton: true
      }
    );
  });
  return {
    comment,
    changeComment: value => {
      setComment({ ...value });
    }
  };
};

export const Comment = memo(props => {
  const { comment, changeComment } = commentHook();
  console.log("--->", "rerendered");
  return (
    <>
      <Commentui
        comment={comment}
        updateComment={() => {
          // dispatch async actions
          changeComment({
            color: "blue",
            content: "updated!",
            displayButton: false
          });
        }}
      />
    </>
  );
});
