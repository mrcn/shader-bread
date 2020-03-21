import React from "react";
import "../styles.css";
import Navigation from './Navigation';
import TOC from './TOC';
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";




export default function App() {
  return (
    <div className="App">
      <Navigation />
      <header>
        <h1>page header area with titles</h1>
      </header>
      <main>
        <section>
          <h2>Lorem ipsum</h2>
          <p>
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. A lacus vestibulum sed
            arcu non odio. Euismod nisi porta lorem mollis aliquam. Tincidunt
            arcu non sodales neque sodales ut. Odio eu feugiat pretium nibh
            ipsum consequat. Nullam vehicula ipsum a arcu cursus. Magna eget est
            lorem ipsum dolor sit amet consectetur adipiscing. Hac habitasse
            platea dictumst vestibulum rhoncus est pellentesque elit. Eu sem
            integer vitae justo. Nisl nisi scelerisque eu ultrices. Ipsum dolor
            sit amet consectetur adipiscing. Tristique senectus et netus et.
            Nisi quis eleifend quam adipiscing vitae proin. Ante in nibh mauris
            cursus mattis molestie a iaculis. Tellus at urna condimentum mattis.
            Venenatis cras sed felis eget velit aliquet sagittis. Porttitor eget
            dolor morbi non arcu risus. Et tortor at risus viverra adipiscing
            at. In arcu cursus euismod quis viverra nibh cras pulvinar mattis.
          </p>
        </section>
        <h2>Ultricies tristique</h2>
        <p>
          nulla aliquet enim tortor at auctor. Ullamcorper morbi tincidunt
          ornare massa eget. Ut ornare lectus sit amet est placerat in egestas.
          Venenatis cras sed felis eget velit aliquet. Id ornare arcu odio ut
          sem nulla pharetra. Risus sed vulputate odio ut enim blandit volutpat.
          Lorem mollis aliquam ut porttitor. Lacus sed turpis tincidunt id. Nibh
          venenatis cras sed felis. Amet volutpat consequat mauris nunc congue.
        </p>
        <section>
          <h2>Elit sed vulputate</h2>
          <p>
            mi sit amet. Fermentum posuere urna nec tincidunt praesent semper
            feugiat nibh sed. Euismod quis viverra nibh cras pulvinar mattis
            nunc. Scelerisque viverra mauris in aliquam sem fringilla ut morbi.
            Habitasse platea dictumst quisque sagittis purus sit amet. Eget
            nullam non nisi est. Varius quam quisque id diam vel. Pharetra
            pharetra massa massa ultricies mi quis hendrerit dolor magna.
            Venenatis urna cursus eget nunc scelerisque viverra mauris in
            aliquam. Ultricies mi quis hendrerit dolor magna eget est. Dolor sit
            amet consectetur adipiscing elit. Aliquam ut porttitor leo a. Sit
            amet volutpat consequat mauris nunc congue. Euismod quis viverra
            nibh cras pulvinar mattis nunc sed blandit.
          </p>
        </section>

        <section>
          <h2>Arcu ac tortor dignissim convallis</h2>
          <p>
            aenean et tortor at. Ultrices dui sapien eget mi proin sed libero
            enim sed. Sagittis purus sit amet volutpat consequat. Purus in massa
            tempor nec. Bibendum neque egestas congue quisque egestas diam in
            arcu. Congue mauris rhoncus aenean vel elit scelerisque mauris
            pellentesque. Augue neque gravida in fermentum. Arcu dictum varius
            duis at. Et sollicitudin ac orci phasellus egestas tellus. Ipsum
            faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Dolor
            morbi non arcu risus quis varius. Ullamcorper velit sed ullamcorper
            morbi tincidunt ornare massa eget. Morbi non arcu risus quis varius
            quam. Diam maecenas sed enim ut sem viverra.
          </p>
        </section>

        <section>
          <h2>Maecenas volutpat</h2>
          <p>
            blandit aliquam etiam erat velit scelerisque in. Cursus metus
            aliquam eleifend mi in nulla posuere. Venenatis cras sed felis eget
            velit. Augue lacus viverra vitae congue eu. Faucibus a pellentesque
            sit amet porttitor eget. Donec et odio pellentesque diam volutpat
            commodo sed egestas egestas. Scelerisque mauris pellentesque
            pulvinar pellentesque habitant. Dui ut ornare lectus sit amet est.
            Urna nunc id cursus metus aliquam eleifend. Praesent semper feugiat
            nibh sed pulvinar proin gravida. Lectus nulla at volutpat diam. Sed
            risus pretium quam vulputate dignissim suspendisse in est ante.
            Integer malesuada nunc vel risus commodo viverra maecenas. Sit amet
            massa vitae tortor condimentum lacinia quis vel eros. Feugiat nisl
            pretium fusce id velit ut tortor pretium viverra. Placerat in
            egestas erat imperdiet. Quis lectus nulla at volutpat diam ut
            venenatis tellus in. Sit amet nulla facilisi morbi tempus iaculis.
            Mattis pellentesque id nibh tortor id aliquet.
          </p>
        </section>
      </main>
        <TOC />
      <footer>footer area</footer>
    </div>
  );
}
