import React from 'react';
import { _getCurrentYear } from '../helpers/helpers';

export default function Footer() {
  return (
    <footer>
      <p>Witold Sławko & Łukasz Samulnik &copy; {_getCurrentYear()} All rights reserved.</p>
    </footer>
  );
}
