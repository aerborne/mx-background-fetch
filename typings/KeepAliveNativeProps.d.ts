/**
 * This file was generated from KeepAliveNative.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";

export interface KeepAliveNativeProps<Style> {
    name: string;
    style: Style[];
    url: string;
    interval: number;
}

export interface KeepAliveNativePreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    url: string;
    interval: number | null;
}
