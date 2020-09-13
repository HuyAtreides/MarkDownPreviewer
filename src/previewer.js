import React from "react";
import marked from "marked";
function Previewer(props) {
	let fullScreenStyles = checkFullScreen(props.fullScreen);
	let previewHeight =
		!props.fullScreen[0] && props.fullScreen[1]
			? { minHeight: "100vh" }
			: {};
	marked.setOptions({
		breaks: true,
	});
	let rawHTML = marked(props.input);
	return (
		<div id="previewer-wrap" style={fullScreenStyles.style}>
			<div id="previewer-toolbar">
				<i className="fa fa-free-code-camp fa-1x" id="logo"></i>{" "}
				Previewer
				<i
					className={fullScreenStyles.iconClass}
					id="expand-previewer"
				></i>
			</div>
			<div
				id="preview"
				dangerouslySetInnerHTML={{ __html: rawHTML }}
				style={previewHeight}
			></div>
		</div>
	);
}
function checkFullScreen(fullScreen) {
	if (fullScreen[0] && !fullScreen[1])
		return { style: { display: "none" }, iconClass: "" };
	else if (!fullScreen[0] && fullScreen[1])
		return {
			style: { width: "96%" },
			iconClass: "fa fa-compress",
		};
	return {
		style: {},
		iconClass: "fa fa-expand",
	};
}
export default Previewer;
