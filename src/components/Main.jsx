import { NavBar } from "./NavBar";
import Button from "./Button";

export default function Main() {
  return (
    <>
      <NavBar />
      <main className="max-w-4xl flex flex-col items-center sm:items-start lg:ml-20 mt-20">
        <div className="flex flex-col items-center mt-4 sm:flex-row">
          <img
            src="images/me.jpeg"
            alt="Image of Davonne"
            className="w-full max-w-sm rounded-full sm:max-w-xs"
          />

          <div className="ml-4 flex flex-col">
            <span className="mt-20 text-4xl font-fugaz">
              Hello I'm Davonne &#128075;
            </span>
            <p className="mt-4">
              Nullam eget felis eget nunc. Morbi non arcu risus quis. Sed
              viverra ipsum nunc aliquet bibendum enim. Lectus magna fringilla
              urna porttitor rhoncus dolor purus non enim. Posuere sollicitudin
              aliquam ultrices sagittis. Eu consequat ac felis donec et odio
              pellentesque diam volutpat. Purus viverra accumsan in nisl nisi
              scelerisque. Nulla pellentesque dignissim enim sit amet venenatis
              urna.
            </p>
          </div>
        </div>

        <Button />
      </main>
    </>
  );
}
