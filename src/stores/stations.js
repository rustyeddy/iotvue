import { defineStore } from 'pinia'

export const useStationStore = defineStore({
    id: 'stations',
    state: () => ({
        stations: {}
    }), 
    
    getters: {
        getStations: (state) => state.stations
    },

    actions: {
        addStation: (state, station) => {
            // state.stations[] = station
            return state.stations
        },
        saveData: (state, data) => {
            console.log(data)
        }
    }
})

