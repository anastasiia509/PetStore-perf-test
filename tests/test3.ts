import { storeScenario } from "../scenarios/storeScenario.ts";
import { userScenario } from "../scenarios/userScenario.ts";

export const options = {
    cloud: {
        projectID: 8048953,
        name: "Petstore Load Test",
    },
    scenarios: {
        store: {
            executor: "constant-vus",
            vus: 5,
            duration: '3m',
            exec: "storeScenario",
        },
        users: {
            executor: "ramping-vus",
            stages: [
                { duration: "1m", target: 3 },
                { duration: "2m", target: 3 },
                { duration: "1m", target: 0 },
            ],
            exec: "userScenario",
        }
    },
    thresholds: {
        http_req_duration: [
            "avg<250",
            "p(90)<500",
            "p(95)<600",
            "max<2000",
        ],

        http_req_failed: ["rate===0"],
    },

}

export { storeScenario, userScenario };