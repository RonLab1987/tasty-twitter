import Vue from "vue";
import { toLocalDateTime } from "@ronlab/tasty-twitter-core";

Vue.filter("toLocalDateTime", toLocalDateTime);
