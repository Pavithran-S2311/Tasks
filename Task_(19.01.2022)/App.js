import React,{useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import './style.css';

export default function App() {
  const [date1, setDate1] = useState('');
  const [userDate, setuserDate] = useState();
  const [changedDate, setchangedDate] = useState(false);
  const [time1, setTime1] = useState('');
  const [userTime, setuserTime] = useState();
  const [changedTime, setchangedTime] = useState(false);
  const [task, setTask] = useState('');
  const [editing, setediting] = useState(false);
  const [currentTask, setCurrentTask] = useState({});
  const [tasks, setTasks] = useState([]);
  const [userEmoji,setUserEmoji] = useState('');
  const [userEmojiValue,setUserEmojiValue] = useState('');
  let  happy='https://cdn-icons-png.flaticon.com/512/742/742750.png'
  let average='https://cdn-icons-png.flaticon.com/512/742/742774.png'
  let sad='https://cdn-icons-png.flaticon.com/512/742/742752.png'
  
  useEffect(() => {
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate());
    let date = currentDate.toISOString().substr(0, 10);
    setDate1(date)

    let currentTime = new Date();
    currentTime.setTime(currentTime.getTime());
    let time = currentTime.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,});
    setTime1(time)
  });
  
  function emojiSelection(emoji,emojiValue) {
    setUserEmoji(emoji);
    setUserEmojiValue(emojiValue);
  }

  function inputChange(e) {
    setTask(e.target.value);
  };

  const getSubmit = (e) => {
    e.preventDefault();
    if (task !== '') {
      setTasks([
        ...tasks,
        {
          id: tasks.length + 1,
          text: task,
          date: changedDate?userDate:date1,
          time: changedTime?userTime:time1,
          emoji: userEmoji,
          emojiValue: userEmojiValue
        },
      ]);
    }
    setTask('');
    setUserEmoji('');
  };

  function getEditClick(task) {
    setediting(true);
    setCurrentTask({ ...task});
  }

  function getEditChange(e) {
    setCurrentTask({ ...currentTask, text: e.target.value });
    console.log(currentTask);
  }

  function getEdit(e) {
    getUpdate(currentTask.id, currentTask);
  }

  function getUpdate(id, currentTask) {
    const updatedItem = tasks.map((task) => {
      return task.id === id ? currentTask : task;
    });
    setediting(false);
    setTasks(updatedItem);
  }

  function getDeleteClick (id) {
    const removeItem = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(removeItem);
  }

  return (
  <>
    <main className="main-area">
      <div className="form-fill">
        <h1>Diary App</h1>
          <div className="form-element">
           <label htmlFor="Date">Date  </label>
            <input name="Date" type="date" defaultValue={date1}onChange= {(e) => {setuserDate(e.target.value),setchangedDate(true)}} />
          </div>
          <div className="form-element"><label htmlFor="Time">Time  </label>
            <input name="Time" type="time" defaultValue={time1} onChange={(e) => {setuserTime(e.target.value),setchangedTime(true)}} /> </div>{' '}
      {editing ? (
        <div>
          <div className="form-element"><label htmlFor="editTask">Notes</label>  
            <textarea name="editTask" type="text" placeholder="Edit " value={currentTask.text}
              onChange={getEditChange}/>
          </div>
          <div className="form-element">
            <p> How are you feeling?</p>
              <div className="emoji-section">
                <img title="Happy" src={happy} onClick={(e)=>{emojiSelection(happy,"Happy")}} 
                height={30} width={30} />
                <img title="Average" src={average} onClick={(e)=>{emojiSelection(average,"Average")}}   height={30} width={30} />
                <img title="Sad" src={sad} onClick={(e)=>{emojiSelection(sad,"Sad")}} 
                height={30} width={30} /></div>
              </div>
            <button onClick={getEdit}>Update</button>
          </div>
      ) : (
        <div>
          <div className="form-element"><label htmlFor="task">Notes</label>
            <textarea name="task" type="text" placeholder="Add Notes" value={task}
             onChange={inputChange}/>    
          </div>
          <div className="form-element">
            <p>How are you feeling?</p>
              <div className="emoji-section">
                <img title="Happy" src={happy} onClick={(e)=>{emojiSelection(happy,"Happy")}} 
                height={30} width={30} />
                <img title="Average" src={average} onClick={(e)=>{emojiSelection(average,"Average")}} height={30} width={30} />
                <img title="Sad" src={sad} onClick={(e)=>{emojiSelection(sad,"Sad")}} height={30} width={30} />
              </div>
          </div>
          <button onClick={getSubmit}>Add</button>
        </div>
      )}
      </div>
        <div className="display">
          <ul>
          {tasks.length
            ?tasks.map((task) => (
              <li key={task.id}>
                <div className="message"> 
                  <span> {task.emoji ? <img src={task.emoji} height={30} width={30} /> : null}
                   {/* <p>{task.emojiValue}</p> */}
                  </span> 
                  <p id="text">{task.text}</p>
                    <div className="icon-section">
                      <EditIcon onClick={() => getEditClick(task)} />
                      <DeleteIcon onClick={() => getDeleteClick(task.id)} />
                    </div>
                </div>
                <div className="date-time"> 
                  <p>{task.date} , {task.time} </p>
                </div>  
              </li>
             )) 
           : " Added Notes can be displayed here!"
          }
          </ul>
        </div>
    </main>
  </>
  );
}
