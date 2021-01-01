import Link from "next/link";
const pqr = () => {
	const styles = {
		background: "grey",
		display: "flex",
		justifyContent: "space-between",
		padding: "1rem",
	};

	return (
		<div style={styles}>
			<Link href="/">
				<a>Home</a>
			</Link>
			<Link href="/contact">
				<a>contact</a>
			</Link>
			<Link href="/about">
				<a> about</a>
			</Link>
		</div>
	);
};

export default pqr;
