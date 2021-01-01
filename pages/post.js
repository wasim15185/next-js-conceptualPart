import React, { Component } from "react";
import axios from "axios";
//Option -1
//jodi 'withRouter' use kori

//import { withRouter } from "next/router";

// const post = (props) => <h1>i am POST #{props.router.query.id}</h1>;

//export default withRouter(post);

//OR

//Option-2 ...

const post = (props) => (
	<div>
		<h1>i am POST #{props.id}</h1>
		{props.comments.map((commentObj) => (
			<Comment {...commentObj} key={commentObj.id} />
		))}
	</div>
);
//ai 'comment component' ta choto tai r alada file kore raklam na eksonge rekhe dilam
const Comment = ({ email, body }) => (
	<div>
		<h5>{email}</h5>
		<p>{body}</p>
	</div>
);

post.getInitialProps = async ({ query }) => {
	//console.log(query);
	try {
		const res = await axios.get(
			`https://jsonplaceholder.typicode.com/comments?postId=${query.id}`
		);
		// console.log(res.data);
		return { ...query, comments: res.data };
	} catch (err) {}
};

export default post;
