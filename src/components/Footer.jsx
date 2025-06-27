const Footer = () => {
  return (
    <section className="flex flex-col justify-center items-center py-10 bg-gray-100">
      <div className="font-poppins text-center">
        <h2 className="text-2xl font-bold mb-4">Join the Cat Care Community</h2>
        <p className="text-gray-600 mb-6">
          Stay updated with the latest tips and products for your feline friend.
        </p>
        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
          Subscribe Now
        </button>
      </div>
      <div className="mt-8 text-gray-500 text-sm font-poppins">
        &copy; {new Date().getFullYear()} Cat Care. All rights reserved.
      </div>
    </section>
  );
}

export default Footer;