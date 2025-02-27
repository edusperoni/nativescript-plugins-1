import * as React from "react";
import { Dialogs } from '@nativescript/core';
import { StyleSheet } from "react-nativescript";
import { DemoSharedNativescriptFancyalert } from '@demo/shared';
import { } from '@nstudio/nativescript-fancyalert';

export function HomeScreen() {
    const demoShared = new DemoSharedNativescriptFancyalert();
    return (
        <flexboxLayout style={styles.container}>
            <button
                style={styles.button}
                onTap={() => demoShared.showSuccess()}
            >
                Test nativescript-fancyalert
            </button>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
    },
    button: {
        fontSize: 24,
        color: "#2e6ddf",
    },
});