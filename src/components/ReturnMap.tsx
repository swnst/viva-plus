"use client";

import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";

const stations = [
    { id: 1, name: "ตู้คืนขวด สยามพารากอน", area: "ปทุมวัน", lat: 13.7462, lng: 100.5348, count: 2431 },
    { id: 2, name: "ตู้คืนขวด เซ็นทรัลเวิลด์", area: "ปทุมวัน", lat: 13.7466, lng: 100.5393, count: 3182 },
    { id: 3, name: "ตู้คืนขวด เอ็มควอเทียร์", area: "วัฒนา", lat: 13.7305, lng: 100.5697, count: 1874 },
    { id: 4, name: "ตู้คืนขวด เทอร์มินอล 21", area: "วัฒนา", lat: 13.7373, lng: 100.5601, count: 2205 },
    { id: 5, name: "ตู้คืนขวด สีลมคอมเพล็กซ์", area: "บางรัก", lat: 13.7284, lng: 100.5343, count: 1653 },
    { id: 6, name: "ตู้คืนขวด ไอคอนสยาม", area: "คลองสาน", lat: 13.7263, lng: 100.5099, count: 2890 },
];

export function ReturnMap() {
    const [isMounted, setIsMounted] = useState(false);
    const [LeafletComps, setLeafletComps] = useState<any>(null);

    useEffect(() => {
        setIsMounted(true);
        Promise.all([
            import("react-leaflet")
        ]).then(([RL]) => {
            setLeafletComps(RL);
        });
    }, []);

    if (!isMounted || !LeafletComps) {
        return (
            <div className="rounded-3xl overflow-hidden border border-border shadow-editorial h-[360px] md:h-[480px] bg-muted animate-pulse" />
        );
    }

    const { MapContainer, TileLayer, CircleMarker, Popup } = LeafletComps;

    return (
        <div className="rounded-3xl overflow-hidden border border-border shadow-editorial h-[360px] md:h-[480px] relative z-0">
            <MapContainer center={[13.7462, 100.5348]} zoom={12} className="w-full h-full" scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />
                {stations.map((s) => {
                    const radius = 10 + Math.min(20, s.count / 200);
                    return (
                        <CircleMarker
                            key={s.id}
                            center={[s.lat, s.lng]}
                            radius={radius}
                            pathOptions={{ color: "#c98a2b", fillColor: "#e8b84a", fillOpacity: 0.55, weight: 2 }}
                        >
                            <Popup>
                                <div className="text-sm">
                                    <div className="font-semibold text-neutral-900">{s.name}</div>
                                    <div className="text-xs text-neutral-500 mt-1">เขต {s.area}</div>
                                    <div className="mt-2 text-xs">
                                        <span className="font-mono text-amber-700">{s.count.toLocaleString()}</span>
                                        <span className="text-neutral-500 ml-1">ขวดคืนเดือนนี้</span>
                                    </div>
                                </div>
                            </Popup>
                        </CircleMarker>
                    );
                })}
            </MapContainer>
            <div className="absolute top-3 left-3 z-[400] bg-card/90 backdrop-blur px-3 py-2 rounded-xl text-xs shadow-md border border-border pointer-events-none">
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-gradient-gold" />
                    <span className="text-muted-foreground">ขนาด = ปริมาณขวดที่คืน</span>
                </div>
            </div>
        </div>
    );
}