export type StarProps = {
  id: string;
  rating?: number;
  colorClass?: "primary" | "secondary" | "tertiary";
  fill?: "full" | "half" | "transparent";
  size?: "small" | "medium" | "large";
  align?: "left" | "center" | "right";
};

export type Field = {
  name: string;
  value: string | number;
  placeholder?: string;
  onValueChange?: (value: string) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type Question = {
  id: string;
  question: string;
  description?: string;
  type: "text" | "radio" | "checkbox" | "select";
  options?: {
    value?: string;
    title?: string;
    options?: {
      value: string;
    }[];
  }[];
  placeholder?: string;
}
