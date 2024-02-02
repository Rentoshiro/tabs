function BtnContainer({ setInfo, jobs, currentItem }) {
  return (
    <div className="btn-container">
      {jobs.map((item, index) => {
        return (
          <button
            onClick={() => setInfo(index)}
            className={currentItem === index ? "job-btn active-btn" : "job-btn"}
            key={item.id}
          >
            {item.company}
          </button>
        );
      })}
    </div>
  );
}

export default BtnContainer;
