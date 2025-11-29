import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientButton } from "@/components/ui/gradient-button";

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null,
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    private handleReload = () => {
        window.location.reload();
    };

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen w-full flex items-center justify-center bg-background p-4">
                    <GlassCard className="max-w-md w-full p-8 text-center space-y-6">
                        <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto">
                            <AlertTriangle className="w-8 h-8 text-destructive" />
                        </div>

                        <div className="space-y-2">
                            <h2 className="text-2xl font-bold font-heading">Something went wrong</h2>
                            <p className="text-foreground-muted">
                                We apologize for the inconvenience. An unexpected error has occurred.
                            </p>
                        </div>

                        {this.state.error && (
                            <div className="p-4 bg-background-secondary/50 rounded-lg text-left overflow-auto max-h-32 text-sm font-mono text-destructive">
                                {this.state.error.toString()}
                            </div>
                        )}

                        <GradientButton
                            onClick={this.handleReload}
                            className="w-full"
                            variant="primary"
                        >
                            <RefreshCw className="w-4 h-4 mr-2" />
                            Reload Page
                        </GradientButton>
                    </GlassCard>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
