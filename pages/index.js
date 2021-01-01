//  import Navbar from "../components/navbar";
// import React, { Component } from "react";

import axios from "axios";
import Link from "next/link";

//1. here getInitialProps using 'class' COMPONENT

// class xyz extends Component {
// 	static async getInitialProps() {
// 		console.log("i am GetinitialProps rendering ...");
// 		return { abc: "abc" };
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<h2>Hello i am Index page </h2>
// 			</div>
// 		);
// 	}
// }

//2. here getInitialProps using 'functional' COMPONENT

const xyz = ({ posts, error }) => {
	console.log("i am Index and i am rendering ...");
	let lis;
	if (!error) {
		lis = posts.map((post) => (
			<li key={post.id}>
				<Link href={`/post?id=${post.id}`} as={`/p/${post.id}`}>
					<a>{post.title}</a>
				</Link>
			</li>
		));
	}

	return (
		<div>
			{/* <Navbar /> */}
			<h2>Hello i am Index page </h2>

			<ul>{!error ? lis : <li>{error}</li>}</ul>
		</div>
	);
};

xyz.getInitialProps = async () => {
	try {
		let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
		const { data } = res;

		return { posts: data };
	} catch (err) {
		// console.log(err);
		return { error: "not found !" };
	}
};

export default xyz;
