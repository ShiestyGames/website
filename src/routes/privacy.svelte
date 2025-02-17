<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>Privacy Policy</title>
</svelte:head>

<div class="content">
	<h1>Privacy Policy</h1>
	<p>
		Shiesty Games builds mobile games and apps and are provided as a service to end users. The
		services are provided as is and are either completely free, ad supported, contain in-app
		purchases or a combination of the latter two.
	</p>
	<p>
		This page is used to inform visitors regarding our policies with the collection, use, and
		disclosure of Personal Information if anyone decided to use our Services.
	</p>
	<p>
		If you choose to use our Services, then you agree to the collection and use of information in
		relation to this policy. The Personal Information that we collect is used for providing and
		improving the Services. We will not use or share your information with anyone except as described
		in this Privacy Policy.
	</p>
	<p><strong>Information Collection and Use</strong></p>
	<p>
		For a better experience, while using our Services, we may require you to provide us with certain
		personally identifiable information, including but not limited to Unique Device Identifier. The
		information that we request will be retained by us and used as described in this privacy policy.
	</p>
	<div>
		<p>The app does use third party services that may collect information used to identify you.</p>
		<p>Links to privacy policy of third party service providers used by the app</p>
		<ul>
			<li>
				<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google</a>
			</li>
			<li>
				<a href="https://unity3d.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Unity</a>
			</li>
			<li>
				<a href="https://www.adcolony.com/privacy-policy" target="_blank" rel="noopener noreferrer">AdColony</a>
			</li>
			<li>
				<a href="https://www.applovin.com/privacy" target="_blank" rel="noopener noreferrer">AppLovin</a>
			</li>
			<li>
				<a href="https://www.facebook.com/about/privacy" target="_blank" rel="noopener noreferrer">Facebook</a>
			</li>
			<li>
				<a href="https://www.mopub.com/en/legal/privacy" target="_blank" rel="noopener noreferrer">MoPub</a>
			</li>
			<li>
				<a href="https://vungle.com/privacy" target="_blank" rel="noopener noreferrer">Vungle</a>
			</li>
			<li>
				<a href="https://developers.is.com/ironsource-mobile/air/ironsource-mobile-privacy-policy/" target="_blank" rel="noopener noreferrer">ironSource</a>
			</li>
			<li>
				<a href="https://www.mintegral.com/en/privacy/" target="_blank" rel="noopener noreferrer">Mintegral</a>
			</li>
			<li>
				<a href="https://answers.chartboost.com/en-us/articles/200780269" target="_blank" rel="noopener noreferrer">Chartboost</a>
			</li>
<!-- 			<li>
				<a href="https://snap.com/en-US/terms/personal-data" target="_blank" rel="noopener noreferrer">Snap Inc.</a>
			</li> -->
			<li>
				<a href="https://ogury.com/privacy-policy/" target="_blank" rel="noopener noreferrer">Ogury</a>
			</li>
<!-- 			<li>
				<a href="https://www.verizonmedia.com/policies/xw/en/verizonmedia/privacy/intl/index.html" target="_blank" rel="noopener noreferrer">Verizon Media</a>
			</li> -->
			<li>
				<a href="https://www.inmobi.com/privacy-policy" target="_blank" rel="noopener noreferrer">InMobi</a>
			</li>
		</ul>
	</div>
	<p><strong>Log Data</strong></p>
	<p>
		We want to inform you that whenever you use our Services, in a case of an error in the app we
		collect data and information (through third party products) on your phone called Log Data. This
		Log Data may include information such as your device Internet Protocol (“IP”) address, device
		name, operating system version, the configuration of the app when utilizing our Services, the
		time and date of your use of the Services, and other statistics.
	</p>
	<p><strong>Cookies</strong></p>
	<p>
		Cookies are files with a small amount of data that are commonly used as anonymous unique
		identifiers. These are sent to your browser from the websites that you visit and are stored on
		your device's internal memory.
	</p>
	<p>
		The Services does not use these “cookies” explicitly. However, the app may use third party code
		and libraries that use “cookies” to collect information and improve their services. You have the
		option to either accept or refuse these cookies and know when a cookie is being sent to your
		device. If you choose to refuse our cookies, you may not be able to use some portions of the
		Services.
	</p>
	<p><strong>Service Providers</strong></p>
	<p>We may employ third-party companies and individuals due to the following reasons:</p>
	<ul>
		<li>To facilitate our Services;</li>
		<li>To provide the Services on our behalf;</li>
		<li>To perform Service-related services; or</li>
		<li>To assist us in analyzing how our Services is used.</li>
	</ul>
	<p>
		We want to inform users of The Services that these third parties have access to your Personal
		Information. The reason is to perform the tasks assigned to them on our behalf. However, they
		are obligated not to disclose or use the information for any other purpose.
	</p>
	<p><strong>Security</strong></p>
	<p>
		We value your trust in providing us your Personal Information, thus we are striving to use
		commercially acceptable means of protecting it. But remember that no method of transmission over
		the internet, or method of electronic storage is 100% secure and reliable, and we cannot
		guarantee its absolute security.
	</p>
	<p><strong>Links to Other Sites</strong></p>
	<p>
		The Services may contain links to other sites. If you click on a third-party link, you will be
		directed to that site. Note that these external sites are not operated by us. Therefore, we
		strongly advise you to review the Privacy Policy of these websites. We have no control over and
		assume no responsibility for the content, privacy policies, or practices of any third-party
		sites or services.
	</p>
	<p><strong>Children’s Privacy</strong></p>
	<p>
		These Services do not address anyone under the age of 13. We do not knowingly collect personally
		identifiable information from children under 13 years of age. In the case we discover that a
		child under 13 has provided us with personal information, we immediately delete this from our
		servers. If you are a parent or guardian and you are aware that your child has provided us with
		personal information, please contact us so that we will be able to do necessary actions.
	</p>
	<p><strong>Changes to This Privacy Policy</strong></p>
	<p>
		We may update our Privacy Policy from time to time. Thus, you are advised to review this page
		periodically for any changes. We will notify you of any changes by posting the new Privacy
		Policy on this page.
	</p>
	<p>This policy is effective as of 2021-07-12</p>
	<p><strong>Contact Us</strong></p>
	<p>
		If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us
		at contact@shiesty.games.
	</p>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
