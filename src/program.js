// CLI program set
// version => 0.0.1a

const { app } = require('commander');

app
 .name("vCPU manager")
 .version("0.0.1")

app.option("start")
 .description("start vCPU cli manager")

app.parce();
