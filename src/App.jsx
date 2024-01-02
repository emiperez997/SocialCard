import { useState } from "react";
import { SocialCard } from "./Components/SocialCard/SocialCard";
import { OptionMenu } from "./Components/OptionMenu/OptionMenu";

function App() {
  const [showOptionMenu, setShowOptionMenu] = useState(true);

  const closeMenu = () => {
    setShowOptionMenu(false);
  };

  const openMenu = () => {
    setShowOptionMenu(true);
  };

  const user = {
    username: "johndoe",
    name: "John Doe",
    profile_pic:
      "https://th.bing.com/th/id/OIP.AbGafkazjc_S1pZPh0B9cQHaIm?rs=1&pid=ImgDetMain",
    image:
      "https://images.pexels.com/photos/6654172/pexels-photo-6654172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    comments: 10,
    likes: 100,
    content:
      "¡Embárcate en una emocionante odisea mutante con 'X-Men: Renacimiento'! 🚀 Este cómic reciente es una montaña rusa de acción, con giros inesperados que mantendrán tu corazón latiendo fuerte. Los personajes icónicos evolucionan de maneras sorprendentes, y el arte deslumbrante añade una capa visual impresionante a la narrativa. ¡Una lectura obligada para todos los fanáticos de los X-Men y una entrada perfecta para los nuevos en este increíble universo de Marvel! 📖🦸‍♂️ #XMenRenacimiento #MarvelComics #AventuraMutante",
  };

  return (
    <div className="h-screen w-full bg-gray-600 flex justify-center items-center">
      {showOptionMenu && <OptionMenu closeMenu={closeMenu} />}
      <SocialCard
        username={user.username}
        name={user.name}
        image={user.image}
        comments={user.comments}
        likes={user.likes}
        content={user.content}
        picture_image={user.profile_pic}
        openMenu={openMenu}
      />
    </div>
  );
}

export default App;
