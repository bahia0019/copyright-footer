import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import "./editor.scss";
import { InspectorControls, RichText } from "@wordpress/block-editor";
import { useState } from "@wordpress/element";
import { Fragment } from "react";
import {
	Button,
	PanelBody,
	SelectControl,
	RangeControl,
	ToggleControl,
	Toolbar,
	ButtonGroup,
	ColorPicker,
} from "@wordpress/components";
const { useSelect } = wp.data;

export default function edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
	const { toggleYear, toggleSite, toggleSiteCredit, siteCredit } = attributes;

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title={"Copyright Footer Settings"}>
					<ToggleControl
						label="Display Year"
						help={"Displays or hides current year next to Copyright."}
						checked={!!toggleYear}
						onChange={() => setAttributes({ toggleYear: !toggleYear })}
					/>

					<ToggleControl
						label="Display Site Name"
						help={"Displays or hides your site name next to Copyright."}
						checked={!!toggleSite}
						onChange={() => setAttributes({ toggleSite: !toggleSite })}
					/>
				</PanelBody>

				<PanelBody title={"Site Credit"}>
					<ToggleControl
						label="Display Site Credit"
						help={
							"Displays a custom site credit on the right side of the footer."
						}
						checked={!!toggleSiteCredit}
						onChange={() =>
							setAttributes({ toggleSiteCredit: !toggleSiteCredit })
						}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<p className="copyright">
					© {attributes.toggleYear && "YEAR"}{" "}
					{attributes.toggleSite && "SITENAME"}
				</p>

				{toggleSiteCredit && (
					<RichText
						tagName="p"
						className="site-credit"
						value={attributes.content}
						onChange={(content) => setAttributes({ content })}
						placeholder="Click here to edit."
					/>
				)}
			</div>
		</Fragment>
	);
}
