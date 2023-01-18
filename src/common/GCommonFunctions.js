import React, { useEffect, useState } from 'react';
import { clearDefaultsKeys } from "./AsyncstorageFunction"

export const ForceLogout = (props) => {
    clearDefaultsKeys()
    props.navigation.navigate("AuthStack")
  }