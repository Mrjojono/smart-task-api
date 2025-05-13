import plus from '../assets/plus.png';

function AddTask(props) {
  return (
    <div 
    onClick={ ()=> props.setIsClick(true) }
    className={ props.isClick === true ? "hidden" :props.style}>
        <img src={plus} alt="logo" className="m-auto w-[90px]" />
    </div>
  );
}

export default AddTask;
