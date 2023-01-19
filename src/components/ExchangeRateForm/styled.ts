import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  padding: 15px 0 0 0;
`;

export const Section = styled.section`
  padding-left: 40px;
  font-size: larger;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Input = styled.input`
  width: 120px;
  text-align: center;
  height: 40px;
  font-size: large;
`;

export const Button = styled.button`
    all: unset;
    background: dimgray;
    padding: 12px;
    border-radius: 4px;
    margin-left: 16px;
    cursor: pointer;
`;

export const Result = styled.h3`
  min-height: 50px;
  margin: 15px 0 0 0;

  text-align: center;
  font-size: 25px;
`;
