import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save(attributes) {
	const blockProps = useBlockProps.save();
	const { toggleYear, toggleSite, toggleSiteCredit } = attributes;

	return (
		<div {...blockProps}>
			<p className="copyright">
				© {toggleYear && "YEAR"} {toggleSite && "SITENAME"}
			</p>

			{toggleSiteCredit && (
				<RichText.Content
					tagName="p"
					className="site-credit"
					value={attributes.content}
				/>
			)}
		</div>
	);
}
