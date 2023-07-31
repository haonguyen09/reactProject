import 'react' from React


render(() => {
    <div>
                <em>
                    My name is {this.state.name}. 
                    My year old is {this.state.age}
                </em>
                <form onSubmit={(event) => this.handOnSubmit(event)}>
                    <input value= {this.state.name} type="text" onChange = {(event) => {this.handleChange(event)}} />
                    <button>Submit</button>
                
                    <input value= {this.state.age} type="text" onChange = {(event) => {this.handleChangeAge(event)}} />
                    <button>Submit</button>
                </form>

            </div>
})

expect App