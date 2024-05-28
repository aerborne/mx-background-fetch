import { ReactElement, createElement, useEffect } from "react";
import { Text, View } from "react-native";

import { KeepAliveNativeProps } from "../typings/KeepAliveNativeProps";
import { MainStyle } from "./ui/styles";
import BackgroundFetch from "react-native-background-fetch";

export function KeepAliveNative({ url, interval }: KeepAliveNativeProps<MainStyle>): ReactElement {
    useEffect(() => {
        // BackgroundFetch event handler.
        const onEvent = async (taskId: string): Promise<void> => {
            console.log("[BackgroundFetch] task: ", taskId);
            // Do your background work...
            //
            await fetch("http://localhost:3000");
            // IMPORTANT:  You must signal to the OS that your task is complete.
            BackgroundFetch.finish(taskId);
        };

        // Timeout callback is executed when your Task has exceeded its allowed running-time.
        // You must stop what you're doing immediately BackgroundFetch.finish(taskId)
        const onTimeout = async (taskId: string): Promise<void> => {
            console.warn("[BackgroundFetch] TIMEOUT task: ", taskId);
            BackgroundFetch.finish(taskId);
        };
        const initializeBackgroundActivity = async (): Promise<void> => {
            // Initialize BackgroundFetch only once when component mounts.
            const backgroundInterval = Number(interval);
            const status = await BackgroundFetch.configure(
                { minimumFetchInterval: backgroundInterval },
                onEvent,
                onTimeout
            );

            console.log("[BackgroundFetch] configure status: ", status);
        };
        initializeBackgroundActivity();
    });

    return (
        <View>
            <Text>{`${url}`}</Text>
            <Text>{`${interval}ms`}</Text>
        </View>
    );
}
