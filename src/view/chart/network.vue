<template>
  <div>
    <page-header
      :title="title"
      describe="用于展示城市内设备的数量和分布情况"
    ></page-header>
    <page-layout>
      <a-row :gutter="[10, 10]">
        <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
          <a-card>
            <div :id="chartContainer" style="width: 100%; height: 500px"></div>
          </a-card>
        </a-col>
        <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
          <a-card>
            <relation style="width: 100%; height: 500px"></relation>
          </a-card>
        </a-col>
      </a-row>
    </page-layout>
  </div>
</template>
<script>
import { ref, onMounted, onUnmounted } from "vue";
import Mock from "better-mock";
import { Chart } from "@antv/g2";
import { feature } from "topojson";
import relation from "./relation.vue";

export default {
  components: {
    relation,
  },
  setup() {
    const chartContainer = Mock.mock("@GUID");
    const chartRef = ref(null);
    onMounted(() => {
      /**
       * A recreation of this demo: https://vega.github.io/vega-lite/examples/geo_layer_line_london.html
       */

      Promise.all([
        fetch("https://assets.antv.antgroup.com/g2/londonBoroughs.json").then(
          (res) => res.json()
        ),
        fetch("https://assets.antv.antgroup.com/g2/londonCentroids.json").then(
          (res) => res.json()
        ),
        fetch("https://assets.antv.antgroup.com/g2/londonTubeLines.json").then(
          (res) => res.json()
        ),
      ]).then((values) => {
        const [londonBoroughs, londonCentroids, londonTubeLines] = values;
        const london = feature(
          londonBoroughs,
          londonBoroughs.objects.boroughs
        ).features;
        const line = feature(
          londonTubeLines,
          londonTubeLines.objects.line
        ).features;

        const chart = new Chart({
          container: chartContainer,
          autoFit: true,
        });

        const geoView = chart.geoView();

        geoView
          .geoPath()
          .data(london)
          .style("fill", "lightgray")
          .style("stroke", "white")
          .style("strokeWidth", 2);

        geoView
          .text()
          .data(londonCentroids)
          .encode("x", "cx")
          .encode("y", "cy")
          .encode("text", (d) => d.name.split(/\W/)[0])
          .style("fontSize", 8)
          .style("opacity", 0.6);

        geoView
          .geoPath()
          .data(line)
          .encode("color", "id")
          .encode("shape", "hollow")
          .scale("color", {
            domain: Mock.mock({
              "data|12": [
                {
                  "key|+1": 1,
                  value() {
                    return `传感器${this.key}`;
                  },
                },
              ],
            }).data.map((item) => item.value),
            range: [
              "rgb(137,78,36)",
              "rgb(220,36,30)",
              "rgb(255,206,0)",
              "rgb(1,114,41)",
              "rgb(0,175,173)",
              "rgb(215,153,175)",
              "rgb(106,114,120)",
              "rgb(114,17,84)",
              "rgb(0,0,0)",
              "rgb(0,24,168)",
              "rgb(0,160,226)",
              "rgb(106,187,170)",
            ],
          });

        chart.render();
      });
    });
    onUnmounted(() => {
      chartRef.value && chartRef.value.destroy();
    });
    return {
      title: document.title,
      chartContainer,
    };
  },
};
</script>
<style></style>
