import { globalColors } from '../../Styled/GlobalColors';
import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  opacity: 1;
  background-color: rgba(135, 149, 164, 0.6);
  backdrop-filter: blur(10px);

  transition: opacity 250ms ease, background-color 250ms ease;
  z-index: 101;
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 335px;
  padding: 39px 29px 28px;

  font-size: 12px;

  background-color: ${globalColors.white};
  border-radius: 6px;

  @media screen and (min-width: 1440px) {
    padding: 63px 88px 68px;
    border-radius: 13px;
    width: 723px;
  }
`;

export const CrossButton = styled.button`
  position: absolute;
  top: 12px;
  right: 11px;
  width: 38px;
  height: 38px;
  background-color: #171d22;
  border-radius: 50%;
  border: none;

  @media screen and (min-width: 1440px) {
    width: 51px;
    height: 51px;
    top: 26px;
    right: 29px;
  }
`;

export const IconCross = styled.svg`
  width: 38px;
  height: 38px;
  stroke: #fff;

  @media screen and (min-width: 1440px) {
    width: 51px;
    height: 51px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 10px;
  font-family: 'NeutralFace', sans-serif;
  font-weight: 400;
  font-size: 36px;
  letter-spacing: -2px;
  text-align: center;
  color: #131313;

  @media screen and (min-width: 1440px) {
    font-size: 46px;
    margin-bottom: 2px;
  }
`;

export const Text = styled.p`
  margin-bottom: 14px;
  font-family: 'Shtolzl Book', sans-serif;
  font-weight: 400;
  font-size: 11px;
  line-height: 1.5;
  letter-spacing: -1px;
  color: rgba(23, 29, 34, 0.6);
  text-align: center;

  @media screen and (min-width: 1440px) {
    margin-bottom: 28px;
    font-size: 18px;
    line-height: 1.8;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 11px;

  @media screen and (min-width: 1440px) {
    gap: 15px;
  }
`;

export const FormInput = styled.input`
  padding: 21px 17px 23px;
  width: 100%;
  height: 60px;
  background-color: transparent;
  border: 1px solid rgba(23, 29, 34, 0.12);
  font-family: 'Shtolzl Book', sans-serif;
  font-weight: 400;
  font-size: 11px;
  color: rgba(23, 29, 34, 0.6);

  @media screen and (min-width: 1440px) {
    padding: 25px 33px 31px;
    height: 88px;
    font-size: 21px;
  }

  &::placeholder {
    font-family: 'Shtolzl Book', sans-serif;
    font-weight: 400;
    font-size: 11px;
    color: rgba(23, 29, 34, 0.6);
  }

  @media screen and (min-width: 1440px) {
    &::placeholder {
      font-size: 21px;
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #171d22;
  border: none;
  color: #fff;
  font-family: 'Shtolzl', sans-serif;
  font-weight: 500;
  font-size: 12px;
  text-transform: uppercase;

  @media screen and (min-width: 1440px) {
    height: 109px;
    font-size: 24px;
  }
`;
