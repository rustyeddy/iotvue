import { defineStore } from 'pinia'

export const useStationStore = defineStore({
    id: 'stations',
    state: () => ({
        stations: [
            { 
                id: "0.0.0.0",
                sensors: {
                    tempf: 0.0,
                    humidity: 0.0,
                    moisture: 0.0,
                    luminence: 0.0
                }
            },
            {
                id: "1.1.1.1",
                sensors: {
                    tempf: 0.0,
                    humidity: 0.0,
                    moisture: 0.0,
                    luminence: 0.0
                }
            }
        ]
    }), 
    getters: {
        getStations: (state) => state.stations
    },
    actions: {
        addStation: (state, station) => {
            // state.stations[] = station
            return state.stations
        }
    }
})

