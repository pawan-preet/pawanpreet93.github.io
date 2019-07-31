<?php
ob_start();
?>

<style>
body{
font-family: Calibri, Candara, Segoe, 'Segoe UI', Optima, Arial, sans-serif; 
}

@media screen and (min-width: 0px) and (max-width: 1050px) {
#headDiv{width:100%; background-color:green; height:50px;}
#heading{font-size:25px;padding:10px;color:white;font-family: Calibri, Candara, Segoe, 'Segoe UI', Optima, Arial, sans-serif;}
.texts{font-size:15px;padding:20px;color:black;text-align:justify;}
.subHeading{font-weight:bold; font-size:20px; padding:20px;}
}

@media screen and (min-width: 1050.01px) and (max-width:20000px ) {
#headDiv{width:100%; background-color:green; height:100px;}
#heading{font-size:30px;padding:30px 100px 10px 100px;color:white;}
.texts{font-size:15px;padding:10px 100px 10px 100px;color:black; text-align:justify;}
.subHeading{font-weight:bold; font-size:15px; padding:10px 100px 0px 100px;}

}
</style>
<div id="headDiv"><p id="heading">Privacy Policy</p></div>


<p class="texts">We respect your privacy. The following document discloses the information practices followed by Clenergize with respect to your personal information gathered to help us follow up on your request for a solar panel system and with respect to Clenergize's public website, including the type of information that we gather, the way we use information internally and our policy regarding sharing information with others.
We have instructed our website administrator to include information regarding these privacy practices on each location of the Clenergize website where personal information is collected.
We encourage you to read this Privacy Policy.</p>

<p class="subHeading">Collection and Use of Personal Information</p>

<p class="texts">Personal information gathered on our public website means any information that is related to an identified person, or that may be used to identify an individual, including, but not limited to: first and last name; email address; a home, postal or other physical address or other contact information; title, birth date, gender, occupation, industry, or personal interests; and other information necessary or useful to provide a product or service that you have requested.</p>

<p class="subHeading">Protecting Personal Information</p>

<p class="texts">Personal information gathered about customers interested in a solar panel system is only accessible by appropriate personnel who have a business need for the information. We provide training and communication programs to educate our personnel about the meaning and requirements of this privacy statement. We use systems, policies and procedures to maintain the accuracy of customer information and to protect it from loss, misuse, or alteration.</p>

<p class="subHeading">How We Use Personal Information</p>

<p class="texts">The purpose of collecting the personal information is primarily to identify the contact person to follow up on the request for a solar panel system. Personal information about our customers or former customers will only be disclosed as permitted or required by law. Information that has been collected is securely maintained in our records. We do not sell personal information about you to unrelated companies for their independent use.
</p>


<p class="subHeading">Domain Name and IP Address
</p>

<p class="texts">We collect the domain names and IP addresses of our visitors for statistical purposes, in order to measure use, to improve the content or responsiveness of our site or to customize the content or layout of the site for the individual visitor. We do not disclose this information to third parties. We may also aggregate information relating to our visitors' traffic patterns from the data that we collect and retain concerning the IP addresses and domain names of our visitors, and we may divulge such aggregate information about our users with third parties such as our business partners, distributors, and service and support providers.<br.<br>
You may visit our website anonymously if you wish, by using appropriate software or web services available from or through third parties.
</p>

<p class="subHeading">E-mail Address
</p>

<p class="texts">You should know that e-mail is not necessarily secure against all forms of interception. If your communication includes sensitive information about you and you would prefer not to transmit this information in this fashion, please contact us by mail or telephone rather than e-mail.<br><br>
We collect only those e-mail addresses that are volunteered by the visitor, through e-mail messages addressed to our company or its employees, or through visitor responses via the "contact us" portion of the site, e-mail marketing destination web pages and public events.
</p>

<p class="subHeading">Other Personal Information
</p>

<p class="texts">We may use a mailing address or phone number that a visitor provides for a variety of Clenergize-related reasons. We may send periodic mailings to visitors or make telephone calls to inform those visitors who have provided a mailing address or telephone number of new products, services or events.<br><br>
If you do not wish to receive such calls or mailings, you may request to be removed from the contact list by contacting Clenergize at info@Clenergize.com or by telephone (+91-7827 551 551). 
</p>

<p class="subHeading">Personal Information is Not Released to Outside Parties
</p>

<p class="texts">Any information that you provide to us via our website will be used for our purposes only. Your information will not be shared with other individuals or other companies. However, in some instances we may need to provide your name and delivery address to third parties that we use for delivering specific products or services to you (such as support services, shipping or direct mail organizations). In such cases, your name and delivery address are never shared by these third parties. Clenergize may access your information in the event of a dispute, in response to legal process or law enforcement inquiries, abuse of our website, or violation of our Terms of Use Policy.
</p>

<p class="subHeading">Data Security
</p>

<p class="texts">We safeguard the security of the data you send us with certain physical, electronic, and managerial procedures. We have taken reasonable precautions to protect against misuse, theft, loss, unauthorized access, disclosure, alteration or destruction of your personal information.<br><br>
While we strive to protect your personal information, we cannot ensure the security of the information you transmit to us, and so we urge you to take every precaution to protect your personal data when you are on the Internet. We suggest that you change your passwords often, that your passwords include a combination of letters and numbers, and that you make certain that you are using a secure browser. Products and services are available which can help give you privacy protection while navigating the Web.
</p>

<p class="subHeading">Data Forwarding
</p>

<p class="texts">We maintain your personal information on servers and computers located in India and operated under third party supervision and control. We do not forward your personal information outside the country.
</p>

<p class="subHeading">Children's Privacy
</p>

<p class="texts">Children's Privacy
</p>

<p class="subHeading">Third Party Sites
</p>

<p class="texts">At times Clenergize's website may contain links to other sites. When you click on one of these links you are being transferred to a website operated by someone other than Clenergize, and the operator of that website may have a different privacy policy. Clenergize does not share your personal information with these websites and is not responsible for their individual privacy practices. We encourage you to investigate the privacy policies of these operators.
</p>

<p class="subHeading">Future Changes
</p>

<p class="texts">By using our website, you consent to the collection and use of your information as we have outlined in this Privacy Policy and to our Terms of Use Policy. Clenergize may decide to change this Privacy Policy from time to time. When we do, we will post those changes on this page so that you are always aware of the information we collect, how we use it, and under what circumstances we disclose it.
</p>


<?php
$content=ob_get_clean();
$GLOBALS['template']['content']=$content;

include 'templateNew.php';
?>