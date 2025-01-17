import { useRef, useEffect } from "react";

export default function Task({ name, checked, removeTask, toggleTaskStatus }) {
  const checkboxRef = useRef(null);
  const taskNameRef = useRef(null);

  useEffect(() => {
    const checkbox = checkboxRef.current;
    const crossText = taskNameRef.current;

    // Handle the initial checked state
    if (checked) {
      checkbox.checked = true;
      crossText.style.textDecoration = "line-through";
    } else {
      checkbox.checked = false;
      crossText.style.textDecoration = "none";
    }

    const handleCheckBoxChange = () => {
      // Call the function passed from the parent to toggle the checked status
      toggleTaskStatus(name);
    };

    checkbox.addEventListener("change", handleCheckBoxChange);

    return () => {
      checkbox.removeEventListener("change", handleCheckBoxChange);
    };
  }, [name, checked, toggleTaskStatus]);

  return (
    <>
      <div className="task">
        <label>
          <input type="checkbox" ref={checkboxRef} />
        </label>
        <p ref={taskNameRef}>{name}</p>
        <button className="task-delete" onClick={() => removeTask(name)}>
          Remove
        </button>
      </div>
    </>
  );
}







