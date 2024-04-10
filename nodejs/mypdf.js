class PDF
{
    constructor(filename,content)
    {
        this.filename = filename;
        this.content = content;
    }
    save()
    {
        console.log(`I will save pdf using ${this.filename} and ${this.content}`);
    }
}
module.exports = PDF;