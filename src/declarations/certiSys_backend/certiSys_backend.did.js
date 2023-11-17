export const idlFactory = ({ IDL }) => {
  const List = IDL.Rec();
  List.fill(IDL.Opt(IDL.Tuple(IDL.Principal, List)));
  return IDL.Service({
    'getCertificate' : IDL.Func([IDL.Principal], [IDL.Text], []),
    'getId' : IDL.Func([], [IDL.Principal], []),
    'getUsers' : IDL.Func([], [List], ['query']),
    'registerUser' : IDL.Func([IDL.Text], [IDL.Text], []),
  });
};
export const init = ({ IDL }) => { return []; };
