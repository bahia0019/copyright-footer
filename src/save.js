import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save(props) {
	const blockProps = useBlockProps.save();
	const { attributes } = props;
	const {
		toggleYear,
		toggleSite,
		toggleSiteCredit,
		toggleLegalLinks,
		siteCredit,
		legalLinks,
	} = attributes;

	return (
		<div {...blockProps}>
			<p className="copyright">
				© {toggleYear && "%YEAR%"}
				{toggleSite && "%SITENAME%"}
				{toggleLegalLinks && " | "}
				{toggleLegalLinks && (
					<RichText.Content tagName="span" value={legalLinks} />
				)}
			</p>

			{toggleSiteCredit && <RichText.Content tagName="p" value={siteCredit} />}
		</div>
	);
}
