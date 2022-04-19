import React, { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import S from "./Style";

type Props = {
  title: string;
  paragraph: string;
  isOpen: boolean;
  onClose: () => void;
  leftButtonLabel: string;
  rightButtonLabel: string;
  leftButtonAttributes: Omit<
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    "ref"
  >;
  rightButtonAttributes: Omit<
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    "ref"
  >;
};

function ModalWrapper(props: Props) {
  const {
    isOpen,
    title,
    paragraph,
    onClose,
    leftButtonLabel,
    rightButtonLabel,
    leftButtonAttributes,
    rightButtonAttributes,
  } = props;

  const ref = useRef<any>();
  const firstButton = useRef<any>();

  const keyEventListener = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") {
        return;
      }
      const buttons = ref.current.querySelectorAll("button");

      if (e.shiftKey && document.activeElement === buttons[0]) {
        buttons[buttons.length - 1].focus();
        e.preventDefault();
      } else if (
        !e.shiftKey &&
        document.activeElement === buttons[buttons.length - 1]
      ) {
        buttons[0].focus();
        e.preventDefault();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyEventListener);
    firstButton.current.focus();
    return () => {
      document.removeEventListener("keydown", keyEventListener);
    };
  }, [keyEventListener]);

  return (
    <>
      <S.Container ref={ref} open={isOpen} hidden={!isOpen} aria-modal>
        <S.Header>
          <S.Title>{title}</S.Title>
          <S.CloseButton aria-label="close-modal" onClick={onClose}>
            <S.CloseIcon />
          </S.CloseButton>
        </S.Header>
        <S.Content>
          <S.Paragraph>{paragraph}</S.Paragraph>
          <S.ButtonBox>
            <S.LeftButton ref={firstButton} {...leftButtonAttributes}>
              {leftButtonLabel}
            </S.LeftButton>
            <S.RightButton {...rightButtonAttributes}>
              {rightButtonLabel}
            </S.RightButton>
          </S.ButtonBox>
        </S.Content>
      </S.Container>
      <S.BackDrop onClick={onClose} hidden={!isOpen} />
    </>
  );
}

function Modal(props: Props) {
  return createPortal(
    <ModalWrapper {...props} />,
    document.getElementById("modal-root")!
  );
}

export default Modal;
