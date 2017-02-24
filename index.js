var React = require('react');
var ReactDOM = require('react-dom');
var marked = require('marked');

//on enter of text, enter it in the text output 
var Markdown = React.createClass({
	
	createString : function(){
		 
		var txt = "";
		var texti = document.querySelector(".texti").value;
		txt += marked(texti);
		this.setState({string:txt});
		
		console.log(this.state.string);
		},
		
		createMarkUp : function(){
			
			return {__html:this.state.string};
		},
		getInitialState: function(){
			return ({
				string: ""
			})
		},
		
	handleDisplay: function(txt){
		//var textOut = document.getElementsByClassName(".texto")[0];
		//textOut.appendChild(txt);
	},
	
	render:function(){
	
		return <div>
		<h1>A React Markdown Previewer</h1>
		<div className="textacon">
		<textarea   className="texti" onKeyUp={this.createString} placeholder="Enter Github flavored markdown here"  >
		

		</textarea>
		</div>
		<div className="texto" dangerouslySetInnerHTML = {this.createMarkUp()} >

		</div>
		</div>
	}
});

ReactDOM.render(<Markdown />,document.getElementById('app'));;