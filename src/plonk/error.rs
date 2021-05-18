/// This is an error that could occur during proving or circuit synthesis.
// TODO: these errors need to be cleaned up
#[derive(Debug)]
pub enum Error {
    /// This is an error that can occur during synthesis of the circuit, for
    /// example, when the witness is not present.
    SynthesisError,
    /// The provided instances do not match the circuit parameters.
    InvalidInstances,
    /// The constraint system is not satisfied.
    ConstraintSystemFailure,
    /// Out of bounds index passed to a backend
    BoundsFailure,
    /// Opening error
    OpeningError,
    /// Transcript error
    TranscriptError,
    /// Instance provided has more rows than supported by circuit
    NotEnoughRowsAvailable,
    /// Instance provided exceeds number of available rows
    InstanceTooLarge,
}