import React from 'react';
import styled from 'styled-components';

const Cv = () => {
  return (
    <BigWrap>
      <TextWrap>
        <Text>
          <Heading>Education:</Heading>
          <br />
          2021 - Concordia University, Diploma in Full-Stack Web Development
          <br />
          2011 - Rosemount Technology Centre, DVS in Digital Layout {'&'}{' '}
          Printing
          <br />
          <br />
          <Heading>Group Exhibitions:</Heading>
          <br />
          2023 - Anarchy°1, ephemere., Tokyo, Japan
          <br />
          2019 - Now That{'’'}s What I Call Love, Hart Club, London, UK
          <br />
          2018 - Chania International Photo Festival, Center of the
          Mediterranean Architecture, Chania, Greece
          <br />
          2018 - Black {'&'} White, Blank Wall Gallery, Athens, Greece
          <br />
          2017 - Home, Float Magazine (Online)
          <br />
          2016 - Hit The Road, Art_Inkubator, Lodz, Poland
          <br />
          2013 - Nighted Life, Book {'&'} Job Gallery, San Francisco, CA
          <br />
          2013 - Nobody Gives A Break (When You{'’'}re Down On Your Luck), Galerie
          Nowhere, Montreal, QC
          <br />
          2011 - Snapshot Aesthetic, Black Box Gallery, Portland, OR
          <br />
          2011 - Sunny Side Up, Harbour Arm, Margate, UK
          <br />
          <br />
          <Heading>Publications:</Heading>
          <br />
          2023 - Anarchyº1, ephemere.
          <br />
          2020 - Malaise, Self-published
          <br />
          2019 - Now That{'’'}s What I Call Love, The Photocopy Club
          <br />
          2018 - Issue #6: Psalms, Meanwhile Press
          <br />
          2018 - (Untitled) 2015-2017, Self-published (monograph)
          <br />
          2017 - Spew VIII, spewedition
          <br />
          2017 - VVisions Volume #2 - Street Finds
          <br />
          2015 - You Get What You Give
          <br />
          2014 - Tarot Magazine #1
          <br />
          2014 - Nighted Life 5, Nighted Life
          <br />
          2013 - Poutine Dreams, P.D.C.
          <br />
          2013 - Nobody Gives A Break (When You{'’'}re Down On Your Luck),
          Exhibition Catalogue
          <br />
          2013 - Nighted Life Book, Nighted Life
          <br />
          2013 - Doom Life Issue 6, Dark Arts Collective
          <br />
          2013 - Doom Life Issue 2, Dark Arts Collective
          <br />
          2013 - Secrets (split w/Alex Lenkeit), Radical Offenders
          <br />
          2012 - Oratoire, Self-published (monograph)
          <br />
          2012 - F / W / S / S, Self-published
          <br />
          2012 - CXXXVIII, Self-published
          <br />
          2011 - Petit, Self-published
          <br />
        </Text>
      </TextWrap>
    </BigWrap>
  );
};

const Heading = styled.h5`
  margin: 0;
  font-weight: normal;
  font-size: 1.25rem;
  border-bottom: 1px solid #fff;
  display: inline-block;
  padding-bottom: 1px;
  margin-bottom: 0.625rem;
`;
const TextWrap = styled.section`
  width: 39.375rem;
  margin: 1.875rem auto;
  padding: 0 0.938rem;
  @media (max-width: 41.25rem) {
    width: 90%;
  }
`;

const Text = styled.p`
  font-size: 1rem;
`;

const BigWrap = styled.div`
  transition: all 1s ease-out;
  animation: fadein 1s ease-out;
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default Cv;
