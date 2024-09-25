import ContactForm from "@/components/contact/contact";

function Contact() {
    return (
        <div>
            <ContactForm theme="light"/>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.045530741054!2d-77.04140489547943!3d-12.040386523456098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c9d2dcd4ef53%3A0x4d1f9240b11977b!2sEstaci%C3%B3n%20Ram%C3%B3n%20Castilla!5e0!3m2!1str!2str!4v1726774979547!5m2!1str!2str" width={600} height={650} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-100" />
        </div>
    );
}

export default Contact;