export default function Contact() {
  return (
    <div className="container" style={{paddingTop:24,paddingBottom:24}}>
      <h1>Contact Us</h1>
      <p>Fill in the form below or email <a href="mailto:hello@yourdomain.com">hello@yourdomain.com</a>.</p>
      <form onSubmit={(e)=>{e.preventDefault(); const data=new FormData(e.target); const body=encodeURIComponent(
        `Name: ${data.get('name')}
Email: ${data.get('email')}
Phone: ${data.get('phone')}

${data.get('message')}`
      ); window.location.href=`mailto:quotes@yourdomain.com?subject=Quote%20Request&body=${body}`;}} style={{display:'grid',gap:12,maxWidth:520}}>
        <input name="name" placeholder="Name" required className="card"/>
        <input name="email" type="email" placeholder="Email" required className="card"/>
        <input name="phone" placeholder="Phone" className="card"/>
        <textarea name="message" rows="6" placeholder="Tell us about your site…" className="card"></textarea>
        <button className="btn" type="submit">Send</button>
      </form>
      <div style={{marginTop:24}}>
        <p><strong>Phone:</strong> 0000 000 000</p>
        <p><strong>Address:</strong> Your Address, Suburb, State</p>
      </div>
    </div>
  )
}
