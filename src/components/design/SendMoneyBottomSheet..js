import React, { useEffect, useRef } from "react";
import { View, Text, Button } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { colors } from "../metric/colors";

const SendBottomSheet = ({ children, isOpen, setOpen }) => {
  const refRBSheet = useRef();
  useEffect(() => {
    if (isOpen === true) {
      refRBSheet.current.open();
    } else {
      refRBSheet.current.close();
    }
  }, [isOpen]);

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        onClose={() => setOpen(false)}
        closeOnPressMask={false}
        customStyles={{
          container: {
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            padding: 0,
            height: 350,
            backgroundColor: "#10194E",
          },
          wrapper: {
            backgroundColor: "#00000030",
          },
          draggableIcon: {
            backgroundColor: "#4E589F",
            width: 64,
            height: 7,
          },
        }}
      >
        {children}
      </RBSheet>
    </View>
  );
};

export default SendBottomSheet;
