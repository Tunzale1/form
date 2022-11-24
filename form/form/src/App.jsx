import React, { Component } from 'react'
 class App extends Component {
state={
  name:"",
  seriya:"",
  age:"",
  email:"",
  number:"",
  simptom:"",
ischecked:false
}

input=(e)=>{
  this.setState({[e.target.name]:e.target.value})
}

event(){
 alert("kart qeydiyyatdan kecdi, konsolu yoxlayin")

}
  render() {
    console.log(this.state)
    
    return (
      <div className='div'>

<div >
        <label htmlFor='name'>Name</label> <br></br>
        <input value={this.state.name} type="text" id="name" name="name" onChange={this.input} />
        
</div>
<br></br>
<div >
        <label htmlFor='seriya'>Id</label> <br></br>
        <input value={this.state.seriya} type="text" id="seriya" name="seriya" onChange={this.input}/>
   
</div>
<br></br>
<div >
        <label htmlFor='age'>Age</label> <br></br>
        <input value={this.state.age} type="number" id="age" name="age" onChange={this.input} />
       
</div>
<br></br>
<div>
<label>
  Gender <br></br>
  <select className='gender'>
    <option value={this.state.gender} type="option" id="gender" name="gender">Man</option>
    <option value={this.state.gender} type="option" id="gender" name="gender">Woman</option>
  </select>
</label>  
</div>
<br></br>
<div>
        <label htmlFor='email'>Email</label><br></br>
        <input value={this.state.email} type="text" id="email" name="email" onChange={this.input} />
</div>
<br></br>
        <div>
        <label htmlFor='number'>Number</label><br></br>
        <input value={this.state.number} type="number" id="number" name="number" onChange={this.input} />
      </div>
<br></br>
<div>
<label htmlFor='simptom'>Symptoms</label> <br></br>
        <textarea className="simptom" value={this.state.simptom} type="text" id="simptom" name="simptom"   onChange={this.input} />
</div>
<div className='ha'>
  <p>Welcome Again</p>
<input type="checkbox" checked={this.state.ischecked} onChange={(e)=>this.setState({ischecked:!this.state.ischecked})}/>
</div>
<br></br>
<button className ="but"  onClick={this.event}>Send</button>
 </div>
    )
  }
}
export default App