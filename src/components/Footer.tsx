function Footer(){
    return(
        <footer className="bg-black text-gray-400 py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8
            px-4 sm:px-6 lg:px-8 ">
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
                    <p className="mb-4">Music School is a premier institution dedicated to teaching the art and science
                        of music. We nurture talent from the ground up, fostering a vibrant community of musicians.
                    </p>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold">Quick Links</h2>
                    <ul>
                        <li>
                            <a href="#" className="hover:text-white transition-colors duration-300">1</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition-colors duration-300">2</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition-colors duration-300">3</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition-colors duration-300">4</a>
                        </li>
                    </ul>
                </div>
                <div>
                <h2 className="text-white text-lg font-semibold">Follow Us</h2>
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-white transition-colors duration-300">Facebook</a>
                    <a href="#" className="hover:text-white transition-colors duration-300">Twitter</a>
                    <a href="#" className="hover:text-white transition-colors duration-300">Linkedin</a>
                </div>
                </div>
                <div>
                <h2 className="text-white text-lg font-semibold">Contact Us</h2>
                <p>Adress: abc street 12 Avenue Calgary AB</p>  
                </div>
            </div>
            <p className="text-center text-xs pt-8">2024 Music School Copyright. All rights reserved.</p>
        </footer>
    )
}
export default Footer;