import { SnippetString } from "vscode";
import { VariableAdder } from "../models/VariableAdder";
import { Language } from "./intefaces/Language";
import { Support } from "./intefaces/Support";

export class JavaScript extends Language {
    public supports: Support;

    public classSnippet = new SnippetString("class ${1:$TM_FILENAME_BASE}$2 {\n\t$3\n}$0");

    public constructorName = "constructor";
    public constructorText = "\n\n\tconstructor() {\n\t}";

    public argumentText = VariableAdder.placeholder;
    public assignmentEqualSign = " = ";
    public assignmentText = "\tthis." + VariableAdder.placeholder +
        this.assignmentEqualSign +
        VariableAdder.placeholder + ";\n\t";

    constructor() {
        super();
        this.supports = new Support();
        this.supports.setVisibilty(false);
        this.supports.setProperties(false);
    }

    public getPropertyText() {
        return "";
    }

    public getMethodText(isPrivate: boolean) {
        const visibility = isPrivate ? "_" : "";
        const text = "${1:functionName}($2) {\n\t\t${3:throw new Error(\"Method not implemented.\");}\n\t}$0\n";
        return "\t" + visibility + text;
    }

    public getGetterText(functionName: string, propertyName: string): string {
        return "The interface demands this method. Find a solution in future";
    }

    public getSetterText(functionName: string, propertyName: string): string {
        return "The interface demands this method. Find a solution in future";
    }
}
