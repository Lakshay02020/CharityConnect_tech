const Donation=(props)=>{
return(
    <div className="card" style={{width:'18rem',margin:'20px 50px',border: '1px solid green'}}>
  <div className="card-body">
    <h5 className="card-title" style={{color:'green'}}>{props.donation.amount}</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">{props.donation.name}</h6>
    <p className="card-text">{props.donation.date}</p>
    
  </div>
</div>
)
}

export default Donation