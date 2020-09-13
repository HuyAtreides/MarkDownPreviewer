import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Editor from "./editor.js";
import Previewer from "./previewer.js";
import placeHolder from "./placeHolder.js";
class MarkdownPreviewer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: placeHolder,
			editorFullScreen: false,
			previewFullScreen: false,
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleClickPreview = this.handleClickPreview.bind(this);
		this.handleClickEditor = this.handleClickEditor.bind(this);
	}
	handleChange(event) {
		this.setState({
			input: event.target.value,
		});
	}
	handleClickEditor() {
		this.setState((prevState) => ({
			editorFullScreen: !prevState.editorFullScreen,
		}));
	}
	handleClickPreview() {
		this.setState((prevState) => ({
			previewFullScreen: !prevState.previewFullScreen,
		}));
	}
	componentDidMount() {
		document
			.querySelector("#expand-editor")
			.addEventListener("click", () => {
				this.handleClickEditor();
			});
		document
			.querySelector("#expand-previewer")
			.addEventListener("click", () => {
				this.handleClickPreview();
			});
	}
	render() {
		return (
			<div>
				<Editor
					input={this.state.input}
					handleChange={this.handleChange}
					fullScreen={[
						this.state.editorFullScreen,
						this.state.previewFullScreen,
					]}
				/>
				<Previewer
					input={this.state.input}
					fullScreen={[
						this.state.editorFullScreen,
						this.state.previewFullScreen,
					]}
				/>
			</div>
		);
	}
}
ReactDOM.render(<MarkdownPreviewer />, document.querySelector("#root"));
