
export default function GlobalFaqItem({ faq, i }) {
 

  return (
    <div className={`accordion-item ${i === 0 ? "shows" : ""}`}>
      <span>0{i + 1}</span>
      <h2 className="accordion-header" id={`heading${i}`} >
        
          <a className="header-content" href={faq.link}  target="_blank">{faq.title}</a>
       
      </h2>
      <div
        id={`collapse${i}`}
        className={`accordion-collapse collapse ${i === 0 ? "show" : ""}`}
        aria-labelledby={`heading${i}`}
        data-bs-parent="#accordionExample"
      >
        
      </div>
    </div>
  );
}
