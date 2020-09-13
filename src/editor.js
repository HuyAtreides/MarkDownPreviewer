import React from "react";
function Editor(props) {
	let fullScreenStyles = checkFullScreen(props.fullScreen);
	let textareaHeight =
		props.fullScreen[0] && !props.fullScreen[1]
			? { minHeight: "100vh" }
			: {};
	return (
		<div id="editor-wrap" style={fullScreenStyles.style}>
			<div id="editor-toolbar">
				<i className="fa fa-free-code-camp fa-1x" id="logo"></i> Editor
				<i
					className={fullScreenStyles.iconClass}
					id="expand-editor"
				></i>
			</div>
			<textarea
				type="text"
				id="editor"
				value={props.input}
				onChange={props.handleChange}
				style={textareaHeight}
			></textarea>
		</div>
	);
}
function checkFullScreen(fullScreen) {
	if (!fullScreen[0] && fullScreen[1])
		return { style: { display: "none" }, iconClass: "" };
	else if (fullScreen[0] && !fullScreen[1])
		return {
			style: { width: "96%" },
			iconClass: "fa fa-compress",
		};
	return {
		style: {},
		iconClass: "fa fa-expand",
	};
}
export default Editor;
