import React, {Component} from 'react'
import styled from 'styled-components'
import QuoteGene from '../utils/QuoteGenerator';
import * as emailjs from 'emailjs-com'


    export const BodyCta = styled.div 
`
display:flex;
font-family: Courier Prime;
flex-direction:column;
width: 950px;
height:1100px;
margin: 15px auto;
border:1px dotted #a39274;
box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
0 2px 4px rgba(0, 0, 0, 0.24); 

@media(max-width:900px) {
  width:100%;
  margin:0 auto;
  padding-bottom:50px;`



  class Contact extends Component {
    state= {
        name:'',
        company:'',
        email:'',
        phone:'',
        message:''
    }

  
    handleSubmit(e)  {
        e.preventDefault()
        window.alert("Thank you for the message");
        const {name, company, email, phone, message} = this.state

        let templateParams = {
            from_name: name,
            to_name:'Kim',
            email:email,
            company:company,
            phone:phone,
            message_html:message

        }

        emailjs.send(
            'ksemenza247',
            'template_71DraddT',
             templateParams,
            'user_zQcwJBt4fbBhWpc1Dahw6'
           )
           this.resetForm()
       }
      resetForm() {
          this.setState({
            name: '',
            email: '',
            company: '',
            phone: '',
            message: '',
          })
        }

        handleChange = (param, e) => {
            this.setState({[param]: e.target.value}
                )
                console.log(e.target.value)
        }
        




    render(){
  
   

    return (
        <div >
        <BodyCta className='cta-wrap'>
               <div className='about-header-wrap'>
 <h1>Contact</h1>
 </div>
 <div className="contact-form-cta">
     <h6 className='message-title'>Want to know more?</h6>
     <h6 className='message-me'>message me</h6>
     <form onSubmit={this.handleSubmit.bind(this)} className='contact-form'>
         <div className='field-cta'>
         <label>Name</label>
         <input required type='text' value={this.state.name}     onChange={this.handleChange.bind(this, 'name')} name='name' placeholder='name'></input>
         </div>
         <div className='field-cta'>
         <label>Company</label>
         <input type='text'  value={this.state.company}     onChange={this.handleChange.bind(this, 'company')} name='company' placeholder='company'></input>
         </div>
         <div className='field-cta'>
         <label>Email</label>
         <input required type='email'  value={this.state.email}     onChange={this.handleChange.bind(this, 'email')} name='email' placeholder='email'></input>
         </div>
         <div className='field-cta'>
         <label>Phone</label>
         <input type='phone'  value={this.state.phone} name='phone'     onChange={this.handleChange.bind(this, 'phone')} placeholder='phone'></input>
         </div>
         <div className='field-box-cta'>
         <label>Message</label>
         <textarea type='textbox' name='details' value={this.state.message}     onChange={this.handleChange.bind(this, 'message')} placeholder='message'/>
                  </div>
                  <button className='submit-btn trigger'>Submit</button>       
     </form>
     <div className='contact-info-cta'>
       
     <p className='contact-info-title'>Direct Contact Info</p>
         <p className='contact-info'>
         
             Kim Semenza <br/>
         781-866-1073<br/>
         <a className='email-link' href="mailto:ksemenza.247@gmail.com">ksemenza.247@gmail.com</a>
         </p>
     </div>
  
 </div>
        </BodyCta>
        
        </div>
    )
    }
}

export default Contact

